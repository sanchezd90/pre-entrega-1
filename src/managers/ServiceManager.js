export default class ServiceManager {
    constructor(services) {
        this.services = services;
    }

    getServices(){
        return this.services;
    }
    getServiceById(id){
        if(!id){
            throw new Error("ID no proporcionado");
        }
        return this.services.find(service => service.id === id);       
        
    }
    addService(serviceData){
        if(!serviceData.name || !serviceData.description || !serviceData.duration || !serviceData.price || !serviceData.category){
            throw new Error("Datos incompletos");
        }
        const orderedServices = this.services.sort((a, b) => a.id - b.id);
        const newId = orderedServices.length > 0 ? orderedServices[orderedServices.length - 1].id + 1 : 1;
        const newService = {
            id: newId,
            ...serviceData
        }
        this.services.push(newService);
        return newService;
    }
    updateService(id, updatedData){
        if(!id){
            throw new Error("ID no proporcionado");
        }
        const index = this.services.findIndex(service => service.id === id);
        if(index === -1){
            throw new Error("Servicio no encontrado");
        }
        this.services[index] = {...this.services[index], ...updatedData};
        return this.services[index];      
    }
    deleteService(id){
        if(!id){
            throw new Error("ID no proporcionado");
        }        
        this.services = this.services.filter(service => service.id !== id);
    }
}