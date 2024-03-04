import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editCabin as editCabinApi } from "../../services/apiCabins";

export function useEditCabin(removeForm) {
  const queryClient = useQueryClient();
  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => {
      editCabinApi(newCabinData, id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      toast.success("Cabin Edited Successfully.");
      removeForm();
    },
  });
  console.log(isEditing);
  return { editCabin, isEditing };
}
