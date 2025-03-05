import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class ApiDocs {
  static setup(app: INestApplication) {
    const config = new DocumentBuilder()
      .setTitle('PPAPP')
      .setDescription('Backend PPAPP')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    const options = {
      customSiteTitle: `PPAPP backend endpoints`,
      swaggerOptions: {
        docExpansion: 'none',
        tagsSorter: 'alpha',
      },
    };
    SwaggerModule.setup('', app, document, options);
  }
}
