using MediatR;
using project.infrastructure.Models;

namespace czyjToKodAPI.Queries
{
    public class CompareTwoStringsQuery : IRequest<ComparisionResult>
    {
        public string string_a;
        public string string_b;
         public CompareTwoStringsQuery(string string_a, string string_b)
        {
            this.string_a = string_a;
            this.string_b = string_b;
        }
    }
}