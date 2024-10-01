import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FileUploadService {
    constructor(private configService: ConfigService) { }

    getFileUrl(filename: string): string {
        const host = this.configService.get<string>('HOST');
        const port = this.configService.get<string>('PORT');
        return `${host}:${port}/uploads/${filename}`;
    }
}
