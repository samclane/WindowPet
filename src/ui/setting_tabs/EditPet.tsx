import { Text } from "@mantine/core";
import { usePetStore } from "../../hooks/usePetStore";
import { memo, useEffect } from "react";

function EditPet() {

    console.log("EditPet render time");

    return (
        <>
            <Text>Edit Pet</Text>
        </>
    )
}

export default memo(EditPet);