﻿using Labelix.Contracts.Persistence;
using System.Collections.Generic;

namespace Labelix.Logic.Entities.Persistence
{
    class AIConfig : IdentityObject, IAIConfig
    {
        public string Name { get; set; }
        public string DockerImageName { get; set; }
        public string Parameter { get; set; }
        public string InputDirectory { get; set; }
        public string OutputDirectory { get; set; }
        public ICollection<Project_AIConfig> Projects { get; set; }

        public void CopyProperties(IAIConfig other)
        {
            Id = other.Id;
            Name = other.Name;
            DockerImageName = other.DockerImageName;
            Parameter = other.Parameter;
            InputDirectory = other.InputDirectory;
            OutputDirectory = other.OutputDirectory;
        }
    }
}
