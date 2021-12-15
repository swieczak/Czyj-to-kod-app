using project.infrastructure.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace project.infrastructure.Repository.Comparision
{
    public class ComparisionRepository : IComparisionRepository
    {
        public ComparisionResult compareTwoStrings(string string_a, string string_b)
        {
            // TODO: Implement logic
            return new ComparisionResult()
            {
                verdict = "Analiza wskazuje na wysokie pradopodobieństwo",
                sameVariableNames = 10,
                percentOfSimilarity = 0.80,
                differencesInLanguageWords = 3,
            };
        }
    }
}
