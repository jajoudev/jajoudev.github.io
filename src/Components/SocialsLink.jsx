function Component({ content, url, css }) {
  return <a href={url} className={css}>{content}</a>
}

export default Component;
