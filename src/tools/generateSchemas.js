import axios from 'axios';
import fs from 'fs-extra';
import path from 'path';
import convert from 'openapi-schema-to-json-schema';

// Diretório onde os schemas convertidos serão salvos
const SCHEMA_DIR = path.resolve('src', 'schemas');
// Caminho para salvar o Swagger bruto
const RAW_SWAGGER_PATH = path.join(SCHEMA_DIR, 'swagger.json');
// URL do Swagger
const SWAGGER_URL = 'https://raw.githubusercontent.com/ServeRest/ServeRest/trunk/docs/swagger.json';

async function generateSchemas() {
  try {
    console.log('📥 Baixando Swagger...');
    const { data: swagger } = await axios.get(SWAGGER_URL);

    // Salva o Swagger JSON
    await fs.ensureDir(SCHEMA_DIR);
    await fs.writeJson(RAW_SWAGGER_PATH, swagger, { spaces: 2 });
    console.log('✅ Swagger JSON salvo com sucesso!');

    const schemas = swagger.components?.schemas;

    if (!schemas) {
      console.error('❌ Nenhum schema encontrado no Swagger.');
      return;
    }

    for (const [name, schema] of Object.entries(schemas)) {
      const convertedSchema = convert(schema);
      const filePath = path.join(SCHEMA_DIR, `${name}.schema.json`);

      await fs.writeJson(filePath, convertedSchema, { spaces: 2 });
      console.log(`✅ Schema salvo: ${filePath}`);
    }

    console.log('🏁 Todos os schemas foram gerados com sucesso!');
  } catch (err) {
    console.error('❌ Erro ao gerar schemas:', err.message);
  }
}

generateSchemas();
