import AnchorLink from "react-anchor-link-smooth-scroll"

const Link = ({page}) => {
  return (
    <AnchorLink href={page}>
        {page}
    </AnchorLink>
  )
}

export default Link