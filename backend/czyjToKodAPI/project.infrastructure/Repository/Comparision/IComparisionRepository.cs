using project.infrastructure.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace project.infrastructure.Repository.Comparision
{
    public interface IComparisionRepository
    {
        ComparisionResult compareTwoStrings(string string_a, string string_b);
    }
}
