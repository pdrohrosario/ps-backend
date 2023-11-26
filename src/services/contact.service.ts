import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { Contact } from "@prisma/client";
import { ContactCreationDTO } from "src/dtos/contact-dto";

@Injectable()
export class ContactService{
    constructor(private prisma: PrismaService) {}

    async createContact(data: ContactCreationDTO): Promise<Contact> {
        return this.prisma.contact.create({
            data,
        });
    }

    async getByParentID(
        userId: number,
    ): Promise<Contact[] | null> {
        return this.prisma.contact.findMany({
        where: {
            parent_id: Number(userId),
        },
        orderBy: [
            {
            id: "asc",
            },
        ]
        });
    }

    async getByTeacherID(
        userId: number,
    ): Promise<Contact[] | null> {
        return this.prisma.contact.findMany({
        where: {
            teacher_id: Number(userId),
        },
        orderBy: [
            {
            id: "asc",
            },
        ]
        });
    }
}
