import { DataSource } from "typeorm"
import { UsersEntity } from "./entities/users.entity";

const datasource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'nestjs_wv',
    entities: [UsersEntity],
})

export default datasource;
