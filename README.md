# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command
4. Run `npm run dev` command

Structured của chương trình
------src
----------api
--------------controller nơi xủ lý dữ liệu gọi services và sẽ được gọi bởi router
--------------exceptions cấu hình lỗi
--------------middleware kiểm tra dữ liệu đầu vào với Joi
--------------router     trả về router cần thiết
--------------index.ts   nơi router dc gọi
----------entity         nơi tạo ra bảng cơ sở dữ liệu
----------interfaces     interfaces
----------loader         loader chứa các thứ cần thiết lúc ban đầu app chạy 
----------migration      cái này lên typeOrm đọc sẽ hiểu rõ bản chất của nó
----------repositories   nơi xử lý dưới databse
----------services       nơi gọi repositories
----------index.ts       file chạy


