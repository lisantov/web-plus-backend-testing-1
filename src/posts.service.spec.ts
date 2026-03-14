import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    // act
    const newPost = postsService.create(post);

    // assert
    expect(postsService.find(newPost.id)).toBeDefined();
  });

  it('should find a post', () => {
      // act
      const newPost = postsService.create(post);

      // assert
      expect(postsService.find(newPost.id)).toEqual(newPost);
  });
});