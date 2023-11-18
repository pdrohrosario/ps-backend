import { Body, Controller, Post } from "@nestjs/common";
import { Contact } from "@prisma/client";
import { ContactCreationDTO } from "src/dtos/contact-dto";
import { ContactService } from "src/services/contact.service";

@Controller("contact")
export class ContactController {
    constructor(private contactService: ContactService) {}

    @Post()
    async createContact(
        @Body() contactData: ContactCreationDTO,
    ): Promise<Contact> {
        return this.contactService.createContact(contactData);
    }
}
