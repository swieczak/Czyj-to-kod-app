using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace project.infrastructure.Models
{
    public class ComparisionResult
    {
        public string verdict;
        public int sameVariableNames;
        public double percentOfSimilarity;
        public int differencesInLanguageWords;
    }
}
