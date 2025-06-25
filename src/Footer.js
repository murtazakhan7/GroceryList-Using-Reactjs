
const Footer = ({items,Error}) => {
  const length = items.length

if(Error !=='null'){
  return
}
if (length > 1) {
  return (
    <footer>
        <h6>{items.length} List Items</h6>
    </footer>
  )
 } 
else return (
   <footer>
        <h6>{items.length} List Item</h6>
    </footer>
)
}

export default Footer