import type { OrderListDTO } from '@entities/order/schemas/OrderListSchema.ts';
import type { OrderList } from '@entities/order/types.ts';

const mapOrderList = (dto: OrderListDTO): OrderList => ({
  id: dto.id,
  userId: dto.user_id,
  totalPrice: dto.total_price,
  createdAt: dto.created_at,
  orderItems: dto.order_items.map((item) => ({
    gameId: item.game_id,
    price: item.price,
    title: item.title,
    poster: item.poster,
  })),
});

export default mapOrderList;
