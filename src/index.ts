import { Hono } from "hono";
import { requestId } from "hono/request-id";

const app = new Hono();
export default app;

app.use("*", requestId());

app.get("/", (c) => {
  return c.json({
    status: true,
    message: "API is running successfully",
  });
});

app.get("/posts", (c) => {
  return c.json({
    status: true,
    message: "Posts fetched successfully",
    posts: [
      {
        id: 1,
        title: "First Post",
        content: "This is the content of the first post.",
      },
      {
        id: 2,
        title: "Second Post",
        content: "This is the content of the second post.",
      },
    ],
  });
});

app.get("/posts/:id", (c) => {
  const id = c.req.param("id");
  const filter = c.req.query("filter");

  if (isNaN(Number(id))) {
    return c.json({
      status: false,
      message: "Invalid post id",
    });
  }

  return c.json({
    status: true,
    message: `Post with id ${id} fetched successfully`,
    post: {
      id: Number(id),
      title: `Post ${id}`,
      content: `This is the content of post with id ${id}.`,
      filter: Number(filter),
    },
    requestId: c.get("requestId"),
  });
});

app.delete("/posts/:id", (c) => {
  const id = c.req.param("id");

  if (isNaN(Number(id))) {
    return c.json({
      status: false,
      message: "Invalid post id",
    });
  }

  return c.json({
    status: true,
    message: `Post with id ${id} deleted successfully`,
  });
});

app.post("/posts", async (c) => {
  const { title, content } = await c.req.json();

  if (!title || !content) {
    return c.json({
      status: false,
      message: "Title and content are required",
    });
  }

  return c.json({
    status: true,
    message: "Post created successfully",
    post: {
      id: Math.floor(Math.random() * 1000),
      title,
      content,
    },
  });
});
