
using czyjToKodAPI.Queries;
using MediatR;
using project.infrastructure.Models;
using project.infrastructure.Repository.Comparision;
using System.Threading;
using System.Threading.Tasks;

namespace czyjToKodAPI.Handlers
{
    public class CompareTwoStringsQueryHandler : IRequestHandler<CompareTwoStringsQuery, ComparisionResult>
    {
        private readonly IComparisionRepository comparisionRepository;

        public CompareTwoStringsQueryHandler(IComparisionRepository comparisionRepository)
        {
            this.comparisionRepository = comparisionRepository;
        }
        Task<ComparisionResult> IRequestHandler<CompareTwoStringsQuery, ComparisionResult>.Handle(CompareTwoStringsQuery request, CancellationToken cancellationToken)
        {
            return Task.FromResult(this.comparisionRepository.compareTwoStrings(request.string_a, request.string_b));
        }
    }
}
