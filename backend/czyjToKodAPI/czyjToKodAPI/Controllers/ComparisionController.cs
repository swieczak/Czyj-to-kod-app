using czyjToKodAPI.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using project.infrastructure.Models;
using System.Net;
using System.Threading.Tasks;

namespace czyjToKodAPI.Controllers
{
    public class ComparisionController : Controller
    {
        private readonly IMediator _mediator;

        public ComparisionController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        [Route("compareTwoStrings")]
        [ProducesResponseType(typeof(ComparisionResult), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> compareTwoStrings(string string_a, string string_b)
        {
            var query = new CompareTwoStringsQuery(string_a, string_b);
            var result = await _mediator.Send(query);
            return Ok(result);
        }
    }
}
