import fs from 'fs-extra';
import path from 'path';
import { blogCardInterface } from './interface';

const cacheFilePath = path.resolve(process.cwd(), 'cache.json');

async function fetchFromFileCache() {
	if (await fs.pathExists(cacheFilePath)) {
		const cacheData = await fs.readJson(cacheFilePath);
		return cacheData;
	}
	return null;
}

async function storeInFileCache(data: blogCardInterface) {
	await fs.writeJson(cacheFilePath, data);
}

export { fetchFromFileCache, storeInFileCache };
