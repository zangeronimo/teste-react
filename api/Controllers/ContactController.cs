using System.Data.Common;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using api.Data;
using api.Models;
using System.Linq;

namespace api.Controllers
{
    [ApiController]
    public class ContactController : Controller
    {

        [HttpGet("v1/contacts")]
        public async Task<ActionResult<List<Contact>>> Get(
            [FromServices] DataContext context, 
            [FromQuery(Name = "filter")] string filter)
        {   
            try {
                var contacts = context.contacts.AsQueryable();

                // Se existe filtro, aplico à consulta
                if (!string.IsNullOrEmpty(filter))
                {
                    var clause = filter.ToLower();

                    contacts = contacts
                        .Where(x => x.Name.ToLower().Contains(clause)
                                || x.Email.ToLower().Contains(clause) 
                                || x.Birthday.ToLower().Contains(clause));
                }

                return await contacts.ToListAsync();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost("v1/contacts")]
        public async Task<ActionResult<Contact>> Post(
            [FromServices] DataContext context,
            [FromBody]Contact model)
        {
            try {
                if (ModelState.IsValid)
                {
                        context.contacts.Add(model);
                        await context.SaveChangesAsync();
                        return model;
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut("v1/contacts/{id}")]
        public async Task<ActionResult<Contact>> Put(
            [FromServices] DataContext context,
            int id,
            [FromBody]Contact model)
        {
            try {
                var contact = await context.contacts.FindAsync(id);
                if (contact == null) {
                    return BadRequest();
                }

                contact.Name = model.Name;
                contact.Email = model.Email;
                contact.Birthday = model.Birthday;

                context.contacts.Update(contact);
                await context.SaveChangesAsync(); 

                return Ok(contact);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("v1/contacts/{id}")]
        public async Task<ActionResult<Contact>> Delete(
            [FromServices] DataContext context,
            int id)
        {
            try {
                var contact = await context.contacts.FindAsync(id);
                if (contact == null) {
                    return BadRequest();
                }

                context.contacts.Remove(contact);
                await context.SaveChangesAsync();

                return Ok(contact);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}