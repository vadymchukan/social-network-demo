
  // Dodaje jedną funkcje dla zmiany znaczenia w users-reducer z false na true i odwrotnie
  export const updateObjectInArray =(items, itemId, objPropName, newObjProps) =>{
    return items.map(u=>{
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
  }
