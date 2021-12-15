using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace project.infrastructure.Models
{
    public partial class ComparisionResult
    {
        public string verdict { get; set; }
        public int sameVariableNames { get; set; }
        public double percentOfSimilarity { get; set; }
        public int differencesInLanguageWords { get; set; }
    }
}
