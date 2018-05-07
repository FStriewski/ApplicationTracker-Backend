import { JsonController, Get, NotFoundError, Param, Post, Body, Put, Delete } from "routing-controllers";
import {Companys} from './entity'


@JsonController()
export default class CompanyController {

    @Get('/companys')
        async getAllCompanys(){
            const companys =  await Companys.find()
            return companys
        }
    @Get('/companys/:id([0-9]+)')
        async getSingleCompany(@Param("id") id: number){
            const company = await Companys.findOneById(id)
            if(!company) throw new NotFoundError("No company found")
            return company
        }

        // Needs user connection
    @Post('/companys')
        async createCompany(
            @Body() body: Companys
        ){
                const company = await Companys.create(body).save()
                return company
        }


    @Put('/companys/:id([0-9]+)')
        async updateCompany(
            @Param("id") id:number,
            @Body() update: Partial <Companys>
        ){
            const company = await Companys.findOneById(id)
            if(!company) throw new NotFoundError("Company not found")

            return Companys.merge(company, update).save()    
        }

    @Delete('/companys/:id([0-9]+)')
         deleteCompany(
            @Param("id") id: number
        ){
            try{
                console.log("Deleting...")
                 Companys.removeById(id)
                 return id
            }
            catch(e){return e.message}
        }
}