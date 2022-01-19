using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace project.infrastructure.Models
{
    public partial class ComparisionResult
    {
        public Dictionary<string, int> difference { get; set; }
        public List<string> commonVariables { get; set; }
        public List<string> AVariables { get; set; }
        public List<string> BVariables { get; set; }
        public double percentOfSimilarity { get; set; }
        public int differencesInLanguageWords { get; set; }
    }
}
