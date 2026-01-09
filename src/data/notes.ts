import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Note = {
  slug: string;
  title: string;
  body: string;
  date: Date;
  hidden?: boolean;
  tweetId?: string;
};

const notesDirectory = path.join(process.cwd(), "content/notes");

function getNotes(): Note[] {
  const fileNames = fs.readdirSync(notesDirectory);
  
  const notes = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(notesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        body: content.trim(),
        date: new Date(data.date),
        hidden: data.hidden ?? false,
        tweetId: data.tweetId,
      };
    });

  return notes;
}

const NOTES: Note[] = getNotes();

export default NOTES;
