/**
 * Hook TanStack Query — exemple de référence pour tout fetch.
 * Toujours : queryKey stable + queryFn via lib/api.ts.
 */
import { useQuery } from "@tanstack/react-query";
import { apiGet } from "@/lib/api";

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => apiGet<Post[]>("/posts"),
  });
}