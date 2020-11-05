const createTable = {
  // 用户表
  users: `CREATE TABLE IF NOT EXISTS xm_users (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT COMMENT '(自增长)',
    user_id VARCHAR ( 20 ) NOT NULL unique COMMENT '用户ID',
    user_name VARCHAR ( 20 ) NOT NULL unique COMMENT '用户名',
    user_pwd VARCHAR ( 16 ) NOT NULL COMMENT '密码',
    user_avatar VARCHAR ( 225 ) COMMENT '头像',
    user_email VARCHAR ( 64 ) COMMENT '邮箱',
    user_registration_time TIMESTAMP NOT NULL DEFAULT NOW( ) COMMENT '注册日期',
    user_link VARCHAR (225) COMMENT '个人网站链接',
    delete_flag TINYINT COMMENT '删除标志（0启用，1禁用）'
  ) ENGINE = INNODB charset = utf8;`,
  // 文章表
  articles: `CREATE TABLE IF NOT EXISTS xm_articles (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT COMMENT '(自增长)',
    article_id VARCHAR ( 20 ) NOT NULL unique COMMENT '文章ID',
    article_title VARCHAR ( 225 ) NOT NULL COMMENT '标题',
    article_content TEXT ( 5000 ) NOT NULL COMMENT '内容',
    article_view_count VARCHAR ( 20 ) NOT NULL COMMENT '浏览量',
    article_comment_count VARCHAR ( 20 ) NOT NULL COMMENT '评论数',
    article_like_count VARCHAR (20) NOT NULL  COMMENT '点赞数',
    article_status TINYINT COMMENT '状态（0已发布，1草稿，2已删除）',
    article_date TIMESTAMP COMMENT '发布日期',
    create_time TIMESTAMP NOT NULL DEFAULT NOW( ) COMMENT '创建日期',
    delete_flag TINYINT COMMENT '删除标志（0启用，1禁用）'
  ) ENGINE = INNODB charset = utf8;`,
  // 标签表
  tags: `CREATE TABLE IF NOT EXISTS xm_tags (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT COMMENT '(自增长)',
    tag_id VARCHAR ( 20 ) NOT NULL unique COMMENT '标签ID',
    tag_name VARCHAR ( 16 ) NOT NULL unique COMMENT '标签名称',
    tag_alias VARCHAR ( 16 ) NOT NULL COMMENT '标签别名',
    tag_description VARCHAR ( 225 ) COMMENT '标签描述',
    create_time TIMESTAMP NOT NULL DEFAULT NOW( ) COMMENT '创建日期',
    delete_flag TINYINT COMMENT '删除标志（0启用，1禁用）'
  ) ENGINE = INNODB charset = utf8;`,
  // 分类表
  categories: `CREATE TABLE IF NOT EXISTS xm_categories (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT COMMENT '(自增长)',
    categories_id VARCHAR ( 20 ) NOT NULL unique COMMENT '分类ID',
    categories_name VARCHAR ( 16 ) NOT NULL unique COMMENT '分类名称',
    categories_alias VARCHAR ( 16 ) NOT NULL COMMENT '分类别名',
    categories_description VARCHAR ( 225 ) COMMENT '分类描述',
    create_time TIMESTAMP NOT NULL DEFAULT NOW( ) COMMENT '创建日期',
    delete_flag TINYINT  COMMENT '删除标志（0启用，1禁用）'
  ) ENGINE = INNODB charset = utf8;`,
  // 评论表
  comments: `CREATE TABLE IF NOT EXISTS xm_comments (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT COMMENT '(自增长)',
    comment_id VARCHAR ( 20 ) NOT NULL unique COMMENT '评论ID',
    article_id VARCHAR ( 20 ) NOT NULL COMMENT '评论文章ID',
    comment_like_count VARCHAR ( 20 ) NOT NULL COMMENT '评论点赞数',
    comment_content TEXT ( 1000 ) COMMENT '评论内容',
    parent_comment_id VARCHAR ( 20 ) COMMENT '上级评论ID',
    comment_date TIMESTAMP NOT NULL DEFAULT NOW( ) COMMENT '评论日期',
    delete_flag TINYINT COMMENT '删除标志（0启用，1禁用）'
  ) ENGINE = INNODB charset = utf8;`,
  // 友链表
  friends: `CREATE TABLE IF NOT EXISTS xm_friends (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT COMMENT '(自增长)',
    friend_id VARCHAR ( 20 ) NOT NULL unique COMMENT '友链ID',
    friend_name VARCHAR ( 20 ) NOT NULL COMMENT '友链名',
    friend_avatar VARCHAR ( 225 ) COMMENT '友链头像',
    friend_link VARCHAR (225) COMMENT '友链链接',
    friend_description VARCHAR ( 64 ) COMMENT '友链描述',
    create_time TIMESTAMP NOT NULL DEFAULT NOW( ) COMMENT '创建日期',
    delete_flag TINYINT COMMENT '删除标志（0启用，1禁用）'
  ) ENGINE = INNODB charset = utf8;`,
  // 文章设置分类表
  articleCategories: `CREATE TABLE IF NOT EXISTS xm_article_categories (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT COMMENT '(自增长)',
    article_id VARCHAR ( 20 ) NOT NULL COMMENT '文章ID',
    categories_id VARCHAR ( 20 ) NOT NULL COMMENT '分类ID'
  ) ENGINE = INNODB charset = utf8;`,
  // 文章设置标签表
  articleTags: `CREATE TABLE IF NOT EXISTS xm_article_tags (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT COMMENT '(自增长)',
    article_id VARCHAR ( 20 ) NOT NULL COMMENT '文章ID',
    tag_id VARCHAR ( 20 ) NOT NULL COMMENT '标签ID'
  ) ENGINE = INNODB charset = utf8;`,
};
