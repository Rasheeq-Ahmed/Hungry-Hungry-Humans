export function detectCollision(burger, gameObject) {

    let bottomOfBurger = burger.position.y + burger.size;
    let topOfBurger = burger.position.y
    
    let topObject = gameObject.position.y;
    
    let bottomObject = gameObject.position.y + gameObject.height;

    let leftObject = gameObject.position.x;
    let rightObject = gameObject.position.x + gameObject.width;

    if (
      bottomOfBurger >= topObject &&
      topOfBurger <= bottomObject &&
      burger.position.x > leftObject &&
      burger.position.x < rightObject
    ) {
      return true;
    } else {
        return false;
    }
}