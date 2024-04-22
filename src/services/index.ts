import * as recipes from "./recipesService"
import * as ingredients from "./ingredientsService"
import * as preparations from "./preparationsService"

export const services = {
  recipes,
  ingredients,
  preparations,

  storage: {
    imagePath: "https://dutfrjtakpcgxqjtknnm.supabase.co/storage/v1/object/sign/ingredients",
  },
}
