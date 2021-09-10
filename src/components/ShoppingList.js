import '../styles/ShoppingList.css'
const plantList = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yuca',
    'palmier'
]

function ShoppingList() {
    return (
        <ul>
            {plantList.map((plant) => (
                <li>{plant}</li>
            ))}
        </ul>
    )
}
export default ShoppingList