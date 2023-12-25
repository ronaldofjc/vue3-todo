<template>
  <v-card
    max-width="700"
    class="mx-auto"
  >
    <v-container>
      <v-row dense>
        <v-col cols="12" sm="12" md="12">
          <v-card>
            <div class="d-flex justify-space-between">
              <div>
                <v-card-title class="text-h5">{{ props.title }}</v-card-title>
                <v-card-subtitle>{{ props.subtitle }}</v-card-subtitle>
                <v-card-actions>
                  <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                    @click="show = !show"
                  ></v-btn>
                </v-card-actions>
                <v-expand-transition>
                  <div v-show="show">
                    <v-divider></v-divider>
                    <v-card-text>
                      {{ props.text }}
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </div>
              
            </div>
          </v-card>
        </v-col>        
      </v-row>
    </v-container>
    <br/>
  </v-card>
</template>

<script setup>
  import { ref, defineProps } from 'vue';

  const props = defineProps({
    image: String,
    title: String,
    subtitle: String,
    text: String
  })

  const show = ref(false);
</script>