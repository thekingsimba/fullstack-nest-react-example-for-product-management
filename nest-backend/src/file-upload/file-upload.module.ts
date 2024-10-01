import { Module } from '@nestjs/common';

import { FileUploadController } from './controllers/file-upload.controller';
import { FileUploadService } from './services/file-upload.service';

@Module({
  providers: [FileUploadService],
  controllers: [FileUploadController]
})
export class FileUploadModule { }
