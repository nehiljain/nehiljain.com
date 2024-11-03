import { posts } from '#site/content';
import { PostItem } from '@/components/post-item';
import { QueryPagination } from '@/components/query-pagination';
// import { ActivityCalendar } from '@/components/activity-calendar';
import { Tag } from '@/components/tag';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getAllTags, sortPosts, sortTagsByCount } from '@/lib/utils';
import { Metadata } from 'next';
import { NotebookPen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'My writing',
  description:
    'Experiments, TILs, Notes about AI, Data Infrastructure, Startups ...'
};

const POSTS_PER_PAGE = 5;

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
  // const all_posts = posts.filter((post) => post.published);

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h2 className="inline-block font-black text-3xl lg:text-4xl">
            <NotebookPen className="inline-block size-6 lg:size-10 mr-2" />
            Writing
          </h2>
          <p className="text-xl text-muted-foreground">
            Experiments, TILs, Notes about AI, Data Infrastructure, Startups ...
          </p>
        </div>
      </div>
      {/* <ActivityCalendar posts={all_posts} /> */}
      <hr className="my-8" />
      <div className="grid grid-cols-12 gap-3 mt-8">
        <div className="col-span-12 col-start-1 sm:col-span-8">
          <hr />
          {displayPosts?.length > 0 ? (
            <ul className="flex flex-col space-y-6">
              {displayPosts.map((post) => {
                const { slug, date, title, description, tags, body } = post;
                return (
                  <li key={slug}>
                    <PostItem
                      slug={slug}
                      date={date}
                      title={title}
                      description={description}
                      tags={tags}
                      content={body}
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>Nothing to see here yet</p>
          )}
          <QueryPagination
            totalPages={totalPages}
            className="justify-end mt-4"
          />
        </div>
        <Card className="col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1">
          <CardHeader>
            <CardTitle>Tags</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {sortedTags?.map((tag) => (
              <Tag tag={tag} key={tag} count={tags[tag]} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
