﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Labelix.Logic;
using Contract = Labelix.Contracts.Persistence.IUser;
using Model = Labelix.Transfer.Persistence.User;
using Labelix.WebApi.Controllers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Labelix.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : GenericController<Contract, Model>
    {
        public async Task<Contract> GetUserId(string userKeyCloakId)
        {
            var res = (await GetAllWhereAsync(s => s.Keycloak_id == userKeyCloakId)).FirstOrDefault();
            if (res == null)
            {
                return await CreateNewUser(userKeyCloakId);
            }
            else
            {
                return res;
            }
        }

        private async Task<Contract>CreateNewUser(string userKeyCloakId)
        {
            Model model = new Model {Keycloak_id = userKeyCloakId};
            return await InsertModelAsync(model);
        }

        [Authorize(Roles = "admin")]
        [HttpGet("all")]
        private Task<IEnumerable<Model>> GetUsers()
        {
            return GetModelsAsync();
        }

        [Authorize(Roles = "admin")]
        [HttpPost("addUserToProject-{id}")]
        private Task AddUserToProject(int projectId , Model model)
        {
            return new UserProjectController().AddUserToProject(model.Id, projectId);
        }
    }
}
