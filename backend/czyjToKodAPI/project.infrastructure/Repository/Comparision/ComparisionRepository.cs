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
        string[] javaKeywords = {"abstract", "continue", "for", "new", "switch", "assert", "default", "goto", "package", "synchronized", "boolean", "do", "if", "private", "this",
        "break", "double", "implements", "protected", "throw", "byte", "else", "import", "public", "throws", "case", "enum", "instanceof", "return", "transient", "catch", "extends",
        "int", "short", "try", "char", "final", "interface", "static", "void", "class", "finally", "long", "strictfp", "volatile", "const", "float", "native", "super", "while"
    };

        public string[] ignoreSigns = { "(", ")", "[", "]", ";", ":", "\"", "+", "-", "," };
        public ComparisionResult compareTwoStrings(string string_a, string string_b)
        {
            // TODO: Implement logic
            Dictionary<string, int> occurancesInA = new Dictionary<string, int>();
            Dictionary<string, int> occurancesInB = new Dictionary<string, int>();

            foreach(string i in javaKeywords)
            {
                occurancesInA.Add(i, 0);
                occurancesInB.Add(i, 0);
            }
            string clearedA = string_a;
            string clearedB = string_b;

            foreach(string i in ignoreSigns)
            {
                clearedA = clearedA.Replace(i, "");
                clearedB = clearedB.Replace(i, "");
            }

            List<string> phrasesA = clearedA.Split().ToList();
            List<string> phrasesB = clearedB.Split().ToList();

            List<string> nonKeywordPhrasesA = new List<string>();
            List<string> nonKeywordPhrasesB = new List<string>();

            foreach (string i in phrasesA)
            {
                if (javaKeywords.Contains(i))
                {
                    occurancesInA[i] += 1;
                }
                else
                {
                    nonKeywordPhrasesA.Add(i);
                }
            }
            foreach (string i in phrasesB)
            {
                if (javaKeywords.Contains(i))
                {
                    occurancesInB[i] += 1;
                }
                else
                {
                    nonKeywordPhrasesB.Add(i);
                }
            }


            Dictionary<string, int> differenceInKeywords = new Dictionary<string, int>();

            foreach (string i in javaKeywords) {
                if (occurancesInA[i] != 0 || occurancesInB[i] != 0)
                {
                    differenceInKeywords.Add(i, occurancesInB[i] - occurancesInA[i]);
                }
            }

            List<string> wordsOnlyInA = new List<string>();
            List<string> wordsOnlyInB = new List<string>();
            List<string> commonWords = new List<string>();
            foreach (string i in nonKeywordPhrasesA)
            {
                if (nonKeywordPhrasesB.Contains(i))
                {
                    commonWords.Add(i);
                }else
                {
                    wordsOnlyInA.Add(i);
                }
            }

            foreach (string i in nonKeywordPhrasesB)
            {
                if (!nonKeywordPhrasesA.Contains(i))
                {
                    wordsOnlyInB.Add(i);
                }                
            }

            double similarity = (double)commonWords.Count / (double)(wordsOnlyInA.Count + wordsOnlyInB.Count + commonWords.Count);

            //TODO Compare java word dict
            //TODO Compare non java words

            return new ComparisionResult()
            {
                difference = differenceInKeywords,
                AVariables = wordsOnlyInA,
                BVariables = wordsOnlyInB,
                commonVariables = commonWords,
                percentOfSimilarity = similarity,
            };
        }
    }
}
