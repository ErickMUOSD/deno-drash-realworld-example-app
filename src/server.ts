import { Drash, CORSService } from './deps.ts';
import ArticleCommentResource from './resources/article_comment_resource.ts';
import ArticlesResource from './resources/articles_resource.ts';
import HomeResource from './resources/home_resource.ts';
import ProfilesResource from './resources/profiles_resource.ts';
import TagsResource from './resources/tags_resource.ts';
import UserResource from './resources/user_resource.ts';
import UsersLoginResource from './resources/users_login_resource.ts';
import UsersResource from './resources/users_resource.ts';
import FilesResource from './resources/files_resource.ts';

const cors = new CORSService();

export const server = new Drash.Server({
  resources: [
    ArticleCommentResource,
    ArticlesResource,
    HomeResource,
    ProfilesResource,
    TagsResource,
    UserResource,
    UsersLoginResource,
    UsersResource,
    FilesResource,
  ],
  hostname: 'realworld_drash',
  port: 1667,
  protocol: 'http',
  services: [cors],
});
