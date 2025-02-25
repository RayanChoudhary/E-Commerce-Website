import { Adapter, AdapterUser } from "next-auth/adapters";
import { sanityClient } from "sanity/lib/client";

export const SanityAdapter: Adapter = {
  async createUser(user: Omit<AdapterUser, "id">) {
    const newUserId = crypto.randomUUID();
    const sanityUser = {
      _type: "user",
      _id: `user.${newUserId}`,
      name: user.name || "",
      email: user.email || "",
      image: user.image || "",
      emailVerified: user.emailVerified || null,
    };

    await sanityClient.createIfNotExists(sanityUser);

    return {
      id: sanityUser._id,
      name: sanityUser.name,
      email: sanityUser.email,
      image: sanityUser.image,
      emailVerified: sanityUser.emailVerified,
    } as AdapterUser;
  },

  async getUser(id) {
    const user = await sanityClient.fetch(`*[_type == "user" && _id == $id][0]`, {
      id: `user.${id}`,
    });
    if (!user) return null;

    return {
      id: user._id,
      name: user.name,
      email: user.email,
      image: user.image,
      emailVerified: user.emailVerified || null,
    } as AdapterUser;
  },

  async getUserByEmail(email) {
    const user = await sanityClient.fetch(`*[_type == "user" && email == $email][0]`, {
      email,
    });
    if (!user) return null;

    return {
      id: user._id,
      name: user.name,
      email: user.email,
      image: user.image,
      emailVerified: user.emailVerified || null,
    } as AdapterUser;
  },

  async getUserByAccount({ provider, providerAccountId }) {
    // Example implementation (requires you to handle accounts in Sanity)
    return null; // Adjust based on your schema
  },

  async updateUser(user: Partial<AdapterUser> & { id: string }) {
    const updatedUser = await sanityClient
      .patch(`user.${user.id}`)
      .set({
        name: user.name || "",
        email: user.email || "",
        image: user.image || "",
        emailVerified: user.emailVerified || null,
      })
      .commit();

    return {
      id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      image: updatedUser.image,
      emailVerified: updatedUser.emailVerified,
    } as AdapterUser;
  },

  async deleteUser(userId) {
    await sanityClient.delete(`user.${userId}`);
  },
};
