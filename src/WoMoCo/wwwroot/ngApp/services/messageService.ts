﻿namespace WoMoCo.Services {

    export class MessageService {
        public MessageResource;
        public comm;
        
        
        //get all Comms
        public getAllComms() {
            return this.$resource(`/api/comms`).query();
        }
        //get Comm By Id
        public getCommById(id: number) {
            return this.MessageResource.get({ id: id });
            
            
        }
      
        //delete message
        public deleteCommById(id: number) {
            this.MessageResource.delete(id).$promise.then(() => {
                this.comm = null;
                this.$state.go(`inbox`);
            })
        }

        constructor(private $resource: angular.resource.IResourceService,
            public $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService) {            
            this.MessageResource = $resource('/api/comms/:id');
            


        }           
         

        
        
        
       

        
    }
    angular.module('WoMoCo').service('MessageService', MessageService);
}