---
title: How to Write an Article for the Lab Site
date: 2026-10-13
authors: [brian-harrington]
summary: A quick reference for publishing articles on this site — frontmatter, Markdown features, images, and drafts.
tags: [meta, guide]
draft: true
---

This article is a **draft**, so it only appears when running `npm run dev`. Use it as a reference, then delete it or keep it as a draft.

## Creating an article

Add a Markdown file to `src/content/articles/`. The filename becomes the URL, so `src/content/articles/sycophancy-in-agents.md` is published at `/articles/sycophancy-in-agents`.

Every article starts with frontmatter:

```yaml
---
title: Why Conversational Agents Need Different Guardrails
date: 2026-11-02
authors: [brian-harrington, steve-joordens]   # ids from src/content/people/
summary: One or two sentences shown on the articles index and in link previews.
tags: [guardrails, safety]
draft: false
---
```

If an author id doesn't match a file in `src/content/people/`, the build will fail with a clear error, so bylines can never silently break.

## Markdown you can use

Regular paragraphs, *emphasis*, **bold**, [links](https://www.utoronto.ca), and lists:

- Bulleted lists
- With multiple items

1. Numbered lists
2. Work too

> Blockquotes are styled as pull quotes, which is handy for quoting a participant or a transcript.

Tables:

| Setting | General-purpose chat | Purpose-built agent |
| --- | --- | --- |
| Oral assessment | Drifts off-rubric | Follows a structured protocol |
| Simulation | Breaks character | Maintains persona and state |

Code blocks are syntax-highlighted:

```python
def turn(agent, user_utterance):
    return agent.respond(user_utterance, memory=agent.memory)
```

## Images

Put images next to your article (for example in `src/content/articles/images/`) and reference them with a relative path. Astro resizes and optimizes them automatically at build time:

```markdown
![Alt text describing the image](./images/my-figure.png)
```

## Drafts

Set `draft: true` to keep an article out of the published site while you work on it. Flip it to `false` (or remove the line) to publish.
