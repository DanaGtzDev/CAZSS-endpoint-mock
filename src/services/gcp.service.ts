/**
 * 
 * https://internal-pr.prod.gcp-int.autozone.com/commercial-customers-service/customers/commercial/v3/customers/evict-cache/customerBaseInformation/278218
 */


export class GcpService{
    static clearGCPCache(id: number | undefined ): number{
        if(id === undefined){
            return 500
        }
        return 200
    }
}