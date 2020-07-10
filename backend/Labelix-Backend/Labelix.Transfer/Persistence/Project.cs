﻿using Labelix.Contracts.Persistence;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json.Serialization;

namespace Labelix.Transfer.Persistence
{
    public class Project : TransferObject, IProject
    {
        [JsonPropertyName("Name")]
        public string Name { get; set; }
        [JsonPropertyName("Description")]
        public string Description { get; set; }
        [JsonPropertyName("CreationDate")]
        public DateTime CreationDate { get; set; }
        [JsonPropertyName("FinishedAnnotation")]
        public bool FinishedAnnotation { get; set; }

        public void CopyProperties(IProject other)
        {
            Name = other.Name;
            Description = other.Description;
            CreationDate = other.CreationDate;
            FinishedAnnotation = other.FinishedAnnotation;
        }
    }
}