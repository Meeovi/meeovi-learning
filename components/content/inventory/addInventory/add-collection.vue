<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition" persistent>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Create Collection
                </v-btn>
            </template>
            <v-card>
                <form action="" method="post" @v-on:submit.prevent="addContent()">
                    <v-toolbar dark style="background-color: yellowgreen; color: white;">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new Collection</span>
                        </v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="6">
                                    <v-text-field v-model="name" label="Collection Name*" required></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-file-input v-model="image" accept="image/png, image/jpeg, image/bmp" prepend-icon="fas fa-camera" label="Collection Image" multiple></v-file-input>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field v-model="description" label="Collection Description" hint="What is this collection about?">
                                    </v-text-field>
                                </v-col>

                                <v-col cols="12">
                                    <h5>Search Engine Optimization (SEO)</h5>
                                    <v-divider></v-divider>
                                </v-col>

                                <v-col cols="6">
                                    <v-text-field v-model="meta_title" label="Collection SEO Name"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="meta_keywords" label="Collection SEO Keywords"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea v-model="meta_description" label="Collection SEO Description"></v-textarea>
                                </v-col>
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                            Close
                        </v-btn>
                        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                            Save
                        </v-btn>
                    </v-card-actions>
                </form>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    import gql from "graphql-tag";
    import findManyCollections from "../../../../graphql/query/findManyCollections.gql";

    const ADD_COLLECTIONS = gql`
    mutation ($name:String!,$description:String!,$image:String!,$meta_description:String!,$meta_keywords:String!,$meta_title:String!){
    createOneCollections(data: {name: $name, description: $description, image: $image, meta_description: $meta_description, meta_title: $meta_title, meta_keywords: $meta_keywords}) {
        name
        description
        image
        meta_description
        meta_keywords
        meta_title
  }
}`;

    export default {
        data() {
            return {
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false,
                name: " ",
                description: " ",
                image: " ",
                meta_description: " ",
                meta_keywords: " ",
                meta_title: " ",

            }
        },
        /* eslint-disable camelcase */
        methods: {
            async addCollection() {
                const name = this.name;
                const description = this.description;
                const image = this.image;
                const meta_description = this.meta_description;
                const meta_keywords = this.meta_keywords;
                const meta_title = this.meta_title;
                await this.$apollo.mutate({
                    mutation: ADD_COLLECTIONS,
                    variables: {
                        name,
                        description,
                        image,
                        meta_description,
                        meta_keywords,
                        meta_title,
                    },
                    update: (cache, {
                        data: {
                            insertCollections
                        }
                    }) => {
                        // Read data from cache for this query
                        try {
                            const insertedCollection = insertCollections.returning;
                            console.log(insertedCollection)
                            cache.writeQuery({
                                query: findManyCollections
                            })
                        } catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({
                        path: '../../inventory/collections'
                    })
                }).catch(err => console.log(err));
                this.name = ' ';
                this.description = ' ';
                this.image = ' ';
                this.meta_description = ' ';
                this.meta_keywords = ' ';
                this.meta_title = ' ';
            },
        },
    }
</script>