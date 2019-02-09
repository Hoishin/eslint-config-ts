import fs from 'fs';
import path from 'path';

interface User {
	hoge: string;
	fuga: string;
}

export const hoge = (users: User[]) => {
	fs.writeFile(
		path.resolve(__dirname, '../tmp'),
		JSON.stringify(users.map((user) => user.hoge)),
		(err) => {
			if (err) {
				console.error(err); // eslint-disable-line no-console
			}
		},
	);
};
