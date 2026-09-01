import type { GameByIdDTO } from '@entities/game/schemas/GameByIdSchema.ts';
import type { GameById } from '@entities/game/types.ts';
import getIGDBImageUrl from '@entities/game/lib/getIGDBImageUrl.ts';
import formatDate from '@shared/lib/utils/formatDate.ts';

const mapGameById = (dto: GameByIdDTO): GameById => ({
  id: dto.id,
  name: dto.name,
  storyline: dto.storyline,
  summary: dto.summary,
  totalRating: dto.total_rating,
  ageRatings: (() => {
    const exists = dto.age_ratings.find((rating) => rating.organization.name === 'PEGI');
    if (!exists) return { organization: 'PEGI', ratingCategory: '18' };
    return { organization: exists.organization.name, ratingCategory: exists.rating_category.rating };
  })(),
  cover: dto.cover?.url ? getIGDBImageUrl(dto.cover.url) : '',
  firstRelease: formatDate(dto.first_release_date * 1000),
  genres: dto.genres.map((genre) => genre.name),
  playerPerspective: dto.player_perspectives?.map((perspectives) => perspectives?.name)?.[0] ?? 'unknown',
  screenshots:
    dto.screenshots
      ?.map((screenshot) => getIGDBImageUrl(screenshot?.url ?? ''))
      .filter((url): url is string => Boolean(url)) ?? [],
  videoId: dto.videos?.[dto.videos?.length - 1]?.video_id ?? '',
});

export default mapGameById;
