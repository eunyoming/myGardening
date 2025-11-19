import { StackedCardsInteraction } from "@/shared/shadcn/components/ui/stacked-cards-interaction.tsx"

const BoardCard = ({cards}) => {
    return(
        <StackedCardsInteraction
            cards={cards}
        />
    )
}

export { BoardCard }