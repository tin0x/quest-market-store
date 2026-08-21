import type { OrderDTO } from '@features/place-an-order/schemas/OrderSchema.ts';
import type { Order } from '@features/place-an-order/types.ts';

const mapOrder = (dto: OrderDTO): Order => ({
  id: dto.id,
  userId: dto.user_id,
  totalPrice: dto.total_price,
  createdAt: dto.created_at,
  holderName: dto.holder_name,
  lastDigitsOfCard: dto.last_digits_of_card,
});

export default mapOrder;
