import type { OrderListOfGame } from '@entities/order/types.ts';
import type { OrderListOfGameDTO } from '@entities/order/schemas/OrderListOfGameSchema.ts';

const mapOrderById = (dto: OrderListOfGameDTO): OrderListOfGame => ({
  id: dto.id,
  userId: dto.user_id,
  totalPrice: dto.total_price,
  createdAt: dto.created_at,
  orderItems: dto.order_items.map((item) => ({
    gameId: item.game_id,
    title: item.title,
    poster: item.poster,
    price: item.price,
  })),
});

export default mapOrderById;
